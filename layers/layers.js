var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_ResidenceManagement_2 = new ol.format.GeoJSON();
var features_ResidenceManagement_2 = format_ResidenceManagement_2.readFeatures(json_ResidenceManagement_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidenceManagement_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidenceManagement_2.addFeatures(features_ResidenceManagement_2);
var lyr_ResidenceManagement_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_ResidenceManagement_2, 
                radius: 5 * 2,
                gradient: ['#ffffff', '#a9a927'],
                blur: 15,
                shadow: 250,
                title: 'Residence Management'
            });
var format_Property_Management_3 = new ol.format.GeoJSON();
var features_Property_Management_3 = format_Property_Management_3.readFeatures(json_Property_Management_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Property_Management_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Property_Management_3.addFeatures(features_Property_Management_3);
var lyr_Property_Management_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Property_Management_3, 
                radius: 5 * 2,
                gradient: ['#ffffff', '#a9a927'],
                blur: 15,
                shadow: 250,
                title: 'Property_Management '
            });
var format_HOA_4 = new ol.format.GeoJSON();
var features_HOA_4 = format_HOA_4.readFeatures(json_HOA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOA_4.addFeatures(features_HOA_4);
var lyr_HOA_4 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_HOA_4, 
                radius: 5 * 2,
                gradient: ['#ffffff', '#a9a927'],
                blur: 15,
                shadow: 250,
                title: 'HOA'
            });
var format_Viveros_5 = new ol.format.GeoJSON();
var features_Viveros_5 = format_Viveros_5.readFeatures(json_Viveros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viveros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viveros_5.addFeatures(features_Viveros_5);
var lyr_Viveros_5 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Viveros_5, 
                radius: 5 * 2,
                gradient: ['#ffffff', '#1bc52c'],
                blur: 15,
                shadow: 250,
                title: 'Viveros'
            });
var format_Contratistas_6 = new ol.format.GeoJSON();
var features_Contratistas_6 = format_Contratistas_6.readFeatures(json_Contratistas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contratistas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contratistas_6.addFeatures(features_Contratistas_6);
var lyr_Contratistas_6 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Contratistas_6, 
                radius: 5 * 2,
                gradient: ['#ffffff', '#0caa1c'],
                blur: 15,
                shadow: 250,
                title: 'Contratistas'
            });
var format_HotelesGoogleOtros_7 = new ol.format.GeoJSON();
var features_HotelesGoogleOtros_7 = format_HotelesGoogleOtros_7.readFeatures(json_HotelesGoogleOtros_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelesGoogleOtros_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelesGoogleOtros_7.addFeatures(features_HotelesGoogleOtros_7);
var lyr_HotelesGoogleOtros_7 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_HotelesGoogleOtros_7, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles Google Otros'
            });
var format_Hotelesgoogle3estrellas_8 = new ol.format.GeoJSON();
var features_Hotelesgoogle3estrellas_8 = format_Hotelesgoogle3estrellas_8.readFeatures(json_Hotelesgoogle3estrellas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotelesgoogle3estrellas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotelesgoogle3estrellas_8.addFeatures(features_Hotelesgoogle3estrellas_8);
var lyr_Hotelesgoogle3estrellas_8 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Hotelesgoogle3estrellas_8, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles google 3 estrellas '
            });
var format_HotelesGoogle4estrellas_9 = new ol.format.GeoJSON();
var features_HotelesGoogle4estrellas_9 = format_HotelesGoogle4estrellas_9.readFeatures(json_HotelesGoogle4estrellas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelesGoogle4estrellas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelesGoogle4estrellas_9.addFeatures(features_HotelesGoogle4estrellas_9);
var lyr_HotelesGoogle4estrellas_9 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_HotelesGoogle4estrellas_9, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles Google 4 estrellas'
            });
var format_HotelesGoogle5estrellas_10 = new ol.format.GeoJSON();
var features_HotelesGoogle5estrellas_10 = format_HotelesGoogle5estrellas_10.readFeatures(json_HotelesGoogle5estrellas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelesGoogle5estrellas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelesGoogle5estrellas_10.addFeatures(features_HotelesGoogle5estrellas_10);
var lyr_HotelesGoogle5estrellas_10 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_HotelesGoogle5estrellas_10, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles Google 5 estrellas'
            });
var format_6a10personas_11 = new ol.format.GeoJSON();
var features_6a10personas_11 = format_6a10personas_11.readFeatures(json_6a10personas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6a10personas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6a10personas_11.addFeatures(features_6a10personas_11);
var lyr_6a10personas_11 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_6a10personas_11, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '6 a 10 personas'
            });
var format_11a30personas_12 = new ol.format.GeoJSON();
var features_11a30personas_12 = format_11a30personas_12.readFeatures(json_11a30personas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11a30personas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11a30personas_12.addFeatures(features_11a30personas_12);
var lyr_11a30personas_12 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_11a30personas_12, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '11 a 30 personas'
            });
var format_31a50personas_13 = new ol.format.GeoJSON();
var features_31a50personas_13 = format_31a50personas_13.readFeatures(json_31a50personas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31a50personas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31a50personas_13.addFeatures(features_31a50personas_13);
var lyr_31a50personas_13 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_31a50personas_13, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '31 a 50 personas'
            });
var format_51a100personas_14 = new ol.format.GeoJSON();
var features_51a100personas_14 = format_51a100personas_14.readFeatures(json_51a100personas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51a100personas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51a100personas_14.addFeatures(features_51a100personas_14);
var lyr_51a100personas_14 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_51a100personas_14, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '51 a 100 personas'
            });
var format_101a250personas_15 = new ol.format.GeoJSON();
var features_101a250personas_15 = format_101a250personas_15.readFeatures(json_101a250personas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101a250personas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101a250personas_15.addFeatures(features_101a250personas_15);
var lyr_101a250personas_15 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_101a250personas_15, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '101 a 250 personas'
            });
var format_251ymspersona_16 = new ol.format.GeoJSON();
var features_251ymspersona_16 = format_251ymspersona_16.readFeatures(json_251ymspersona_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_251ymspersona_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_251ymspersona_16.addFeatures(features_251ymspersona_16);
var lyr_251ymspersona_16 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_251ymspersona_16, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '251 y más persona'
            });
var group_MapasdecalorHoteles = new ol.layer.Group({
                                layers: [lyr_HotelesGoogleOtros_7,lyr_Hotelesgoogle3estrellas_8,lyr_HotelesGoogle4estrellas_9,lyr_HotelesGoogle5estrellas_10,lyr_6a10personas_11,lyr_11a30personas_12,lyr_31a50personas_13,lyr_51a100personas_14,lyr_101a250personas_15,lyr_251ymspersona_16,],
                                fold: "open",
                                title: "Mapas de calor Hoteles"});
var group_MapadecalorManagementyHOA = new ol.layer.Group({
                                layers: [lyr_ResidenceManagement_2,lyr_Property_Management_3,lyr_HOA_4,lyr_Viveros_5,lyr_Contratistas_6,],
                                fold: "open",
                                title: "Mapa de calor Management y HOA"});
var group_Mapasdecalorhoteles2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapas de calor hoteles2"});
var group_Hoteles2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Hoteles 2"});
var group_HotelesGoogle = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Hoteles Google"});
var group_CVS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CVS"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_ResidenceManagement_2.setVisible(false);lyr_Property_Management_3.setVisible(false);lyr_HOA_4.setVisible(false);lyr_Viveros_5.setVisible(false);lyr_Contratistas_6.setVisible(false);lyr_HotelesGoogleOtros_7.setVisible(false);lyr_Hotelesgoogle3estrellas_8.setVisible(false);lyr_HotelesGoogle4estrellas_9.setVisible(false);lyr_HotelesGoogle5estrellas_10.setVisible(false);lyr_6a10personas_11.setVisible(false);lyr_11a30personas_12.setVisible(false);lyr_31a50personas_13.setVisible(false);lyr_51a100personas_14.setVisible(false);lyr_101a250personas_15.setVisible(false);lyr_251ymspersona_16.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,group_MapadecalorManagementyHOA,group_MapasdecalorHoteles];
