ReporterOptions = {
  header: {
      standard: 'standard', // Full headers all identifying details included
      reduced: 'reduced', // Default, Only basic identifying features
      none: 'none' // No data appended
  },
  url: {
      qa: 'qa', // Default
      production: 'production'
  }
};

function Reporter(settings){
  // The data to be sent
  this.data = settings.data || [];
  // The location of the server we are sending to
  this.url = settings.url || ReporterOptions.url.qa;
   // The header to attach to the message
  this.header = settings.header || ReporterOptions.header.reduced;

  this.queue = function( key, value ){
    // Adds a key, value pair to the list of items to be sent
    this.data.push( key + "=" + value );
  };

  this.clear = function(){
    // Clears all data from the instance, allowing for re-use
    this.data = [];
  };

  this.send = function(){
    // Posts data to the server
    // TODO
  };
}

reporter = new Reporter({url: ReporterOptions.url.production})
reporter.queue('test', 'data')
reporter.queue('more', 'datas')
reporter.queue('test', 'data')

console.log(reporter)
