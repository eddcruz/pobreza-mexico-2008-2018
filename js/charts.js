/* ============================================
   CONFIGURACIÓN INICIAL DE GOOGLE CHARTS
   ============================================ */

// Cargar Google Charts
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAllCharts);

// Función principal que dibuja todos los gráficos
function drawAllCharts() {
    drawChart1();
    drawChart2();
    drawChart3();
    drawChart4();
    drawChart5();
}

/* ============================================
   CHART 1: EVOLUCIÓN NACIONAL (LINE CHART)
   ============================================ */
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Pobreza (%)', 'Pobreza Extrema (%)'],
        ['2008', 44.4, 11.0],
        ['2010', 46.1, 11.3],
        ['2012', 45.5, 9.8],
        ['2014', 46.2, 9.5],
        ['2016', 43.6, 7.6],
        ['2018', 41.9, 7.4]
    ]);

    var options = {
        title: 'Porcentaje de Población en Situación de Pobreza',
        curveType: 'function',
        height: 450,
        legend: { position: 'bottom' },
        colors: ['#1e3a8a', '#ef4444'],
        backgroundColor: 'transparent',
        hAxis: {
            title: 'Año',
            titleTextStyle: { fontSize: 14, bold: true }
        },
        vAxis: {
            title: 'Porcentaje (%)',
            titleTextStyle: { fontSize: 14, bold: true },
            minValue: 0,
            maxValue: 50
        },
        pointSize: 7,
        lineWidth: 3,
        chartArea: { width: '80%', height: '70%' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart1'));
    chart.draw(data, options);
}

/* ============================================
   CHART 2: CARENCIAS SOCIALES (COLUMN CHART)
   ============================================ */
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Carencia', '2008', '2018'],
        ['Rezago educativo', 21.9, 16.9],
        ['Servicios de salud', 38.4, 16.2],
        ['Seguridad social', 65.0, 57.3],
        ['Calidad vivienda', 17.7, 11.1],
        ['Servicios básicos', 22.9, 19.8],
        ['Alimentación', 21.7, 20.4]
    ]);

    var options = {
        title: 'Carencias Sociales 2008 vs 2018 (% de la población)',
        height: 450,
        legend: { position: 'bottom' },
        colors: ['#f59e0b', '#10b981'],
        backgroundColor: 'transparent',
        hAxis: {
            title: 'Tipo de Carencia',
            titleTextStyle: { fontSize: 14, bold: true },
            slantedText: true,
            slantedTextAngle: 45
        },
        vAxis: {
            title: 'Porcentaje (%)',
            titleTextStyle: { fontSize: 14, bold: true },
            minValue: 0
        },
        chartArea: { width: '75%', height: '60%' }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart2'));
    chart.draw(data, options);
}

/* ============================================
   CHART 3: RURAL VS URBANO (AREA CHART)
   ============================================ */
function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Rural', 'Urbano'],
        ['2008', 62.5, 38.9],
        ['2010', 64.9, 40.1],
        ['2012', 61.6, 40.5],
        ['2014', 61.1, 41.7],
        ['2016', 58.2, 39.2],
        ['2018', 55.3, 37.6]
    ]);

    var options = {
        height: 350,
        legend: { position: 'bottom' },
        colors: ['#10b981', '#1e3a8a'],
        backgroundColor: 'transparent',
        isStacked: false,
        areaOpacity: 0.4,
        vAxis: {
            title: 'Porcentaje (%)',
            minValue: 0,
            maxValue: 70
        },
        hAxis: {
            title: 'Año'
        },
        chartArea: { width: '80%', height: '65%' }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart3'));
    chart.draw(data, options);
}

/* ============================================
   CHART 4: INDÍGENA VS NO INDÍGENA (AREA CHART)
   ============================================ */
function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Indígena', 'No Indígena'],
        ['2008', 76.0, 41.4],
        ['2010', 79.5, 43.3],
        ['2012', 76.8, 43.0],
        ['2014', 78.4, 43.6],
        ['2016', 77.6, 41.0],
        ['2018', 74.9, 39.4]
    ]);

    var options = {
        height: 350,
        legend: { position: 'bottom' },
        colors: ['#ef4444', '#1e3a8a'],
        backgroundColor: 'transparent',
        isStacked: false,
        areaOpacity: 0.4,
        vAxis: {
            title: 'Porcentaje (%)',
            minValue: 0,
            maxValue: 85
        },
        hAxis: {
            title: 'Año'
        },
        chartArea: { width: '80%', height: '65%' }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart4'));
    chart.draw(data, options);
}

/* ============================================
   CHART 5: ESTADOS 2018 (BAR CHART)
   ============================================ */
function drawChart5() {
    var data = google.visualization.arrayToDataTable([
        ['Estado', 'Pobreza 2018 (%)', { role: 'style' }],
        ['Chiapas', 76.4, '#ef4444'],
        ['Guerrero', 66.5, '#f97316'],
        ['Oaxaca', 66.4, '#f97316'],
        ['Veracruz', 61.8, '#f59e0b'],
        ['Puebla', 58.9, '#f59e0b'],
        ['Tabasco', 53.6, '#eab308'],
        ['Morelos', 50.8, '#eab308'],
        ['Tlaxcala', 48.4, '#eab308'],
        ['Campeche', 46.2, '#eab308'],
        ['Zacatecas', 46.8, '#eab308'],
        ['Michoacán', 46.0, '#eab308'],
        ['Hidalgo', 43.8, '#84cc16'],
        ['Guanajuato', 43.4, '#84cc16'],
        ['San Luis Potosí', 43.4, '#84cc16'],
        ['México', 42.7, '#84cc16'],
        ['Yucatán', 40.8, '#22c55e'],
        ['Durango', 37.3, '#22c55e'],
        ['Tamaulipas', 35.1, '#22c55e'],
        ['Nayarit', 34.8, '#22c55e'],
        ['Colima', 30.9, '#10b981'],
        ['Sinaloa', 30.9, '#10b981'],
        ['Ciudad de México', 30.6, '#10b981'],
        ['Sonora', 28.2, '#10b981'],
        ['Jalisco', 28.4, '#10b981'],
        ['Quintana Roo', 27.6, '#10b981'],
        ['Querétaro', 27.6, '#10b981'],
        ['Chihuahua', 26.3, '#10b981'],
        ['Aguascalientes', 26.2, '#10b981'],
        ['Baja California', 23.3, '#1e3a8a'],
        ['Coahuila', 22.5, '#1e3a8a'],
        ['Baja California Sur', 18.1, '#1e3a8a'],
        ['Nuevo León', 14.5, '#1e3a8a']
    ]);

    var options = {
        title: 'Ranking de Estados por Nivel de Pobreza 2018',
        height: 900,
        legend: { position: 'none' },
        backgroundColor: 'transparent',
        hAxis: {
            title: 'Porcentaje de Población en Pobreza (%)',
            minValue: 0,
            maxValue: 80
        },
        vAxis: {
            title: 'Entidad Federativa'
        },
        chartArea: { width: '70%', height: '85%' },
        bar: { groupWidth: '75%' }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart5'));
    chart.draw(data, options);
}

/* ============================================
   RESPONSIVE CHARTS ON WINDOW RESIZE
   ============================================ */
window.addEventListener('resize', function() {
    drawAllCharts();
});