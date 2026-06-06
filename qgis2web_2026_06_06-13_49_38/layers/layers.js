var wms_layers = [];

var format_ComunidadesAutnomas_0 = new ol.format.GeoJSON();
var features_ComunidadesAutnomas_0 = format_ComunidadesAutnomas_0.readFeatures(json_ComunidadesAutnomas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesAutnomas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesAutnomas_0.addFeatures(features_ComunidadesAutnomas_0);
var lyr_ComunidadesAutnomas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesAutnomas_0, 
                style: style_ComunidadesAutnomas_0,
                popuplayertitle: 'Comunidades Autónomas',
                interactive: true,
                title: '<img src="styles/legend/ComunidadesAutnomas_0.png" /> Comunidades Autónomas'
            });
var format_ParquesNacionales_1 = new ol.format.GeoJSON();
var features_ParquesNacionales_1 = format_ParquesNacionales_1.readFeatures(json_ParquesNacionales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquesNacionales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquesNacionales_1.addFeatures(features_ParquesNacionales_1);
var lyr_ParquesNacionales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquesNacionales_1, 
                style: style_ParquesNacionales_1,
                popuplayertitle: 'Parques Nacionales',
                interactive: true,
                title: '<img src="styles/legend/ParquesNacionales_1.png" /> Parques Nacionales'
            });
var format_Ros_2 = new ol.format.GeoJSON();
var features_Ros_2 = format_Ros_2.readFeatures(json_Ros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_2.addFeatures(features_Ros_2);
var lyr_Ros_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ros_2, 
                style: style_Ros_2,
                popuplayertitle: 'Ríos',
                interactive: true,
                title: '<img src="styles/legend/Ros_2.png" /> Ríos'
            });

lyr_ComunidadesAutnomas_0.setVisible(true);lyr_ParquesNacionales_1.setVisible(true);lyr_Ros_2.setVisible(true);
var layersList = [lyr_ComunidadesAutnomas_0,lyr_ParquesNacionales_1,lyr_Ros_2];
lyr_ComunidadesAutnomas_0.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'NOMBRE', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', 'AREA': 'ÁREA (HECTÁREAS)', });
lyr_ParquesNacionales_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', });
lyr_Ros_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', });
lyr_ComunidadesAutnomas_0.set('fieldImages', {'ID': 'Hidden', 'TIPO_0101': 'Hidden', 'CODIGO_INE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'COD_INE': 'Hidden', 'TOT_FOR': 'Hidden', 'ARB': 'Hidden', 'NO_ARB': 'Hidden', 'AREA': 'TextEdit', });
lyr_ParquesNacionales_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Declaracio': 'TextEdit', 'Reclasific': 'TextEdit', 'Ampliacion': 'TextEdit', 'Fecha de d': 'TextEdit', 'Modificaci': 'TextEdit', });
lyr_Ros_2.set('fieldImages', {'OBJECTID': 'Hidden', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'Hidden', });
lyr_ComunidadesAutnomas_0.set('fieldLabels', {'CODIGO_INE': 'inline label - visible with data', 'ETIQUETA': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_ParquesNacionales_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'Declaracio': 'inline label - visible with data', 'Reclasific': 'inline label - visible with data', 'Ampliacion': 'inline label - visible with data', 'Fecha de d': 'inline label - visible with data', 'Modificaci': 'inline label - visible with data', });
lyr_Ros_2.set('fieldLabels', {'Texto': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Imagen': 'inline label - visible with data', });
lyr_Ros_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});