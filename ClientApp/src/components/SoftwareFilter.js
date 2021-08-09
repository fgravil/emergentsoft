export const filterSoftwareList = (softwareList, query) => {
    if(!query) {
      return softwareList;
    }
  
    return softwareList.filter(software => {
      const versionArr = software.version.split('.');
      const queryArr = query.split('.');

      for(let i = 0; i < queryArr.length; i++) {

        if(!queryArr[i]) {
          return true;
        }

        let version = parseInt(versionArr[i]);
        let queriedVersion = parseInt(queryArr[i]);

        if(!versionArr[i]) {
          return queriedVersion === 0;
        }
        
        if(version > queriedVersion) {
          return true;
        }
        
        if(version === queriedVersion) {
          if(i === queryArr.length - 1) {
            return true;
          }
          continue;
        }
        
        if(version < queriedVersion) {
          return false
        }
      }
      return false;
    })
  }