const fs = require('fs');
const path = require('path');
const os = require('os');

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      // Log upload errors but don't crash the server
      if (error.code === 'EPERM' && error.path && error.path.includes('strapi-upload')) {
        strapi.log.warn(`Upload cleanup warning: ${error.message}`);
        
        // Try multiple cleanup strategies
        const cleanupStrategies = [
          // Strategy 1: Immediate cleanup
          () => {
            if (fs.existsSync(error.path)) {
              fs.unlinkSync(error.path);
              strapi.log.info(`Successfully cleaned up temporary file: ${error.path}`);
              return true;
            }
            return false;
          },
          
          // Strategy 2: Delayed cleanup
          () => {
            setTimeout(() => {
              try {
                if (fs.existsSync(error.path)) {
                  fs.unlinkSync(error.path);
                  strapi.log.info(`Successfully cleaned up temporary file (delayed): ${error.path}`);
                }
              } catch (cleanupError) {
                strapi.log.debug(`Delayed cleanup failed: ${error.path}`, cleanupError);
              }
            }, 1000);
            return true;
          },
          
          // Strategy 3: Force cleanup on Windows
          () => {
            if (os.platform() === 'win32') {
              try {
                const { execSync } = require('child_process');
                execSync(`del /f /q "${error.path}"`, { stdio: 'ignore' });
                strapi.log.info(`Force cleaned up temporary file: ${error.path}`);
                return true;
              } catch (cmdError) {
                strapi.log.debug(`Force cleanup failed: ${error.path}`, cmdError);
                return false;
              }
            }
            return false;
          }
        ];
        
        // Try each cleanup strategy
        for (const strategy of cleanupStrategies) {
          try {
            if (strategy()) {
              break;
            }
          } catch (strategyError) {
            strapi.log.debug(`Cleanup strategy failed:`, strategyError);
          }
        }
        
        // Don't throw the error - let the upload continue
        // The file will be cleaned up by the OS eventually
        strapi.log.info(`Upload completed despite cleanup warning. File will be cleaned up by system.`);
        return;
      }
      
      // Re-throw other errors
      throw error;
    }
  };
};
