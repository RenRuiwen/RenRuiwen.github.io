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
        var airtable_read_endpoint = "https://api.airtable.com/v0/appVbrhB2yrWn2w6I/General%20intro?api_key=keyaDyjnSKK65cIPQ";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key,value) {
                   items = [];
                        items.push(value.fields.city_name);
                        items.push(value.fields.area);
                        items.push(value.fields.climate);
                        items.push(value.fields.accomadation);
                        items.push(value.fields.sakura_trip);
                        items.push(value.fields.popular_attractions);
                        items.push(value.fields.what_to_eat);
                        items.push(value.fields.special_experience);
                        items.push(value.fields.pictures);
                        items.push(value.fields.suggest_duration_day);
                        items.push(value.fields.recommendation_level);
                        items.push(value.fields.seo);
                        dataSet.push(items);
                        console.log(items);
                }); // end .each
                console.log(dataSet);

            $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "city_name",
                       defaultContent:""},
                     { title: "area",
                       defaultContent:"" },
                     { title: "climate",
                       defaultContent:"" },
                     { title: "accomadation",
                       defaultContent:""},
                     { title: "sakura_trip",
                       defaultContent:""},
                     { title: "popular_attractions",
                       defaultContent:""},
                     { title: "what_to_eat",
                       defaultContent:""},
                     { title: "special_experience",
                       defaultContent:""},
                     { title: "pictures",
                       defaultContent:""},
                     { title: "suggest_duration_day",
                       defaultContent:""},
                     { title: "recommendation_level",
                       defaultContent:""},
                     { title: "seo",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button
}); // document ready