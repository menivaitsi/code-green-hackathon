// Placeholder for Global Dashboard charts.
$( document ).ready(function() {
	var carbon_usage_pichart = new CanvasJS.Chart("chart-02",
	{
		legend:{
			verticalAlign: "bottom",
			horizontalAlign: "center"
		},
		data: [
		{        
			indexLabelFontSize: 20,
			indexLabelFontFamily: "Monospace",       
			indexLabelFontColor: "darkgrey", 
			indexLabelLineColor: "darkgrey",        
			indexLabelPlacement: "outside",
			type: "pie",       
			showInLegend: true,
			toolTipContent: "{y} - <strong>#percent%</strong>",
			dataPoints: [
				{  y: 4181563, legendText:"Food", indexLabel: "Food" },
				{  y: 2175498, legendText:"Travel", indexLabel: "Travel" },
				{  y: 3125844, legendText:"Other",exploded: true, indexLabel: "Household" }
			]
		}
		]
	});
	carbon_usage_pichart.render();
	
	
	var country_carbon_debit_chart = new CanvasJS.Chart("chart-01",
    {
       data: [
      {        
        type: "spline",
        showInLegend: true,
		legendText: "USA",
        dataPoints: [
        { x: new Date(2012, 00, 1), y: 1352 },
        { x: new Date(2012, 01, 1), y: 1514 },
        { x: new Date(2012, 02, 1), y: 1321 },
        { x: new Date(2012, 03, 1), y: 1163 },
        { x: new Date(2012, 04, 1), y: 950 },
        { x: new Date(2012, 05, 1), y: 1201 },
        { x: new Date(2012, 06, 1), y: 1186 },
        { x: new Date(2012, 07, 1), y: 1281 },
        { x: new Date(2012, 08, 1), y: 1438 },
        { x: new Date(2012, 09, 1), y: 1305 },
        { x: new Date(2012, 10, 1), y: 1480 },
        { x: new Date(2012, 11, 1), y: 1291 }        
        ]
      },
      {        
        type: "spline",
        showInLegend: true,
		legendText: "Canada",
        dataPoints: [
        { x: new Date(2012, 00, 1), y: 352 },
        { x: new Date(2012, 01, 1), y: 514 },
        { x: new Date(2012, 02, 1), y: 321 },
        { x: new Date(2012, 03, 1), y: 163 },
        { x: new Date(2012, 04, 1), y: 50 },
        { x: new Date(2012, 05, 1), y: 201 },
        { x: new Date(2012, 06, 1), y: 186 },
        { x: new Date(2012, 07, 1), y: 281 },
        { x: new Date(2012, 08, 1), y: 438 },
        { x: new Date(2012, 09, 1), y: 305 },
        { x: new Date(2012, 10, 1), y: 480 },
        { x: new Date(2012, 11, 1), y: 291 }        
        ]
      },
      {        
        type: "spline",
        showInLegend: true,
		legendText: "Sri Lanka",
        dataPoints: [
        { x: new Date(2012, 00, 1), y: 400 },
        { x: new Date(2012, 01, 1), y: 432 },
        { x: new Date(2012, 02, 1), y: 121 },
        { x: new Date(2012, 03, 1), y: 163 },
        { x: new Date(2012, 04, 1), y: 95 },
        { x: new Date(2012, 05, 1), y: 101 },
        { x: new Date(2012, 06, 1), y: 186 },
        { x: new Date(2012, 07, 1), y: 181 },
        { x: new Date(2012, 08, 1), y: 138 },
        { x: new Date(2012, 09, 1), y: 105 },
        { x: new Date(2012, 10, 1), y: 180 },
        { x: new Date(2012, 11, 1), y: 191 }        
        ]
      } 
        
      ]
    });

    country_carbon_debit_chart.render();
    
    
    var user_carbon_save_graph = new CanvasJS.Chart("chart-03",
    {

       data: [
      {        
        type: "splineArea",
        color:"#881515",
        dataPoints: [
        { x: new Date(2012, 00, 1), y: 1352 },
        { x: new Date(2012, 01, 1), y: 1514 },
        { x: new Date(2012, 02, 1), y: 1321 },
        { x: new Date(2012, 03, 1), y: 1163 },
        { x: new Date(2012, 04, 1), y: 950 },
        { x: new Date(2012, 05, 1), y: 1201 },
        { x: new Date(2012, 06, 1), y: 1186 },
        { x: new Date(2012, 07, 1), y: 1281 },
        { x: new Date(2012, 08, 1), y: 1438 },
        { x: new Date(2012, 09, 1), y: 1305 },
        { x: new Date(2012, 10, 1), y: 1480 },
        { x: new Date(2012, 11, 1), y: 1291 }        
        ]
      }
        
      ]
    });

    user_carbon_save_graph.render();
    
    
    var country_carbon_save_graph = new CanvasJS.Chart("chart-04",
    {

       data: [
      {        
        type: "splineArea",
        color:"#0E75C3",
        dataPoints: [
        { x: new Date(2012, 00, 1), y: 1352 },
        { x: new Date(2012, 01, 1), y: 1514 },
        { x: new Date(2012, 02, 1), y: 1321 },
        { x: new Date(2012, 03, 1), y: 1163 },
        { x: new Date(2012, 04, 1), y: 950 },
        { x: new Date(2012, 05, 1), y: 1201 },
        { x: new Date(2012, 06, 1), y: 1186 },
        { x: new Date(2012, 07, 1), y: 1281 },
        { x: new Date(2012, 08, 1), y: 1438 },
        { x: new Date(2012, 09, 1), y: 1305 },
        { x: new Date(2012, 10, 1), y: 1480 },
        { x: new Date(2012, 11, 1), y: 1291 }        
        ]
      }
        
      ]
    });

    country_carbon_save_graph.render();
    
});
