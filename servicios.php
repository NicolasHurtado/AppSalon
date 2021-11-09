<?php

require 'includes/funciones.php';

$servicio = obtenerServicios();

echo json_encode($servicio);