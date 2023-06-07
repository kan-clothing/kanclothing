function downloadDatabase() {
    var databaseRef = firebase.database().ref();
    
    databaseRef.once('value')
      .then(function(snapshot) {
        var data = JSON.stringify(snapshot.val());
        var fileName = "firebase-database.json";
        
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', fileName);
        element.style.display = 'none';
        document.body.appendChild(element);
        
        element.click();
        
        document.body.removeChild(element);
      })
      .catch(function(error) {
        console.log('Error downloading database:', error);
      });
  }
  