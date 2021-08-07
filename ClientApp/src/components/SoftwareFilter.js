export const filterSoftwareList = (softwareList, query) => {
    if(!query) {
      return softwareList;
    }
  
    return softwareList.filter(software => {
      const versionArr = software.version.split('.');
      const queryArr = query.split('.');
      
      if(!queryArr[0]) {
        return true;
      }
      
      // check major version
      if(parseInt(versionArr[0]) > parseInt(queryArr[0])) {
        return true;
      }
      else if(parseInt(versionArr[0]) === parseInt(queryArr[0])) {
        if(!queryArr[1]) {
          return true;
        }
        // check minor version
        else if(parseInt(versionArr[1]) > parseInt(queryArr[1])) {
          return true;
        }
        else if(parseInt(versionArr[1]) === parseInt(queryArr[1])){
          
          // check patch
          if(!queryArr[2] || parseInt(versionArr[2]) >= parseInt(queryArr[2])) {
            return true;
          }
        }
      }

      return false;
    })
  }