$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appeeqA4CKqRf4IgC/timetable?api_key=keyaDyjnSKK65cIPQ";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.area);
                       items.push(value.fields.location);
                       items.push(value.fields.address);
                       items.push(value.fields.time_period);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Area",
                       defaultContent:""},
                     { title: "Location",
                         defaultContent:"" },
                     { title: "Address",
                       defaultContent:"" },
                     { title: "Timeperiod",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

     $("button#get_data2").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/appeeqA4CKqRf4IgC/timetableRollup?api_key=keyaDyjnSKK65cIPQ";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.timeperiod);
                     items.push(value.fields.rollup);
                     dataSet.push(items);
                     console.log(items);
              }); // end .each
              console.log(dataSet);

           $('#table2').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                   { title: "Timeperiod",
                     defaultContent:""},
                   { title: "Rollup",
                     defaultContent:"" },
               ]
           } );

           var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'bar'
                },
                axis: {
                  x: {label: 'timeperiod'},
                  y: {label: '# of spots'}
                },
                bar: {
                    title: "# of spots by timeperiod:",
                }
            });

      }); // end .getJSON

   }); // end button

}); // document ready
