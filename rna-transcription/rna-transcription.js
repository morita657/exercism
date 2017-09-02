function DnaTranscriber() {}
var transcriptionMap = {'C':'G', 'G':'C', 'A':'U', 'T':'A'};

DnaTranscriber.prototype.toRna = function(arg){

  for (var prop in transcriptionMap) {
    //console.log("transcriptionMap." + prop + " = " + transcriptionMap[prop]);
    if (arg.length < 2 && arg == prop) return transcriptionMap[prop];
    /*
    var word = null;
    if(arg.length > 2 && arg[i] == prop){
      for (var i = 0; i < arg.length; i++){
          console.log(arg[i]);
          word += arg[i].replace(transcriptionMap[prop]);
          // return arg[i].replace(transcriptionMap[prop]);
          console.log(arg[i].replace(transcriptionMap[prop]));

        } 
        return word;
    }
    */
////////////////////////////
    if(arg.length > 2 ){
      var len = '';
      return arg.split('').map(function(e){
        return transcriptionMap[e]
      }).join('');
    }
  }
}

module.exports = DnaTranscriber;