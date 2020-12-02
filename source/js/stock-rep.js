// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';
//<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
// Bar Chart Example
// var ctx = document.getElementById("myBarChart");
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>

var ctx = document.getElementById("myBarChart");

$.ajax({
    url: 'dashboard/analytics',
    type: "GET",
    success: function (element) {
        console.log(element)
        var recipe = [element.recipe.desserts, element.recipe.main_course, element.recipe.appetizers];
        var myLineChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Desserts", "Main Course", "Appetizer"],
                datasets: [{
                    label: "Total",
                    backgroundColor: ["pink","blue","green"],
                    borderColor: "blue",
                    data: recipe,
                }],
            },
            options: {
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'month'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 6
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            maxTicksLimit: 5
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                },
                legend: {
                    display: false
                }
            }
        });
    },

});


