const transactionObject = {
    "monto": "100.00",
    "pais": "MEX",
    "moneda": "MXN",
    "descripcion": "string",
    "capturar": true,
    "incluir_riesgo": true,
    "uso_antifraude": true,
    "metodo_pago": "tarjeta",
    "tarjeta": {
      "token": "string"
    },
    "pedido": {
      "id_externo": "string",
      "creacion": "2019-08-24T14:15:22Z",
      "direccion_envio": {
        "linea1": "string",
        "linea2": "string",
        "linea3": "string",
        "cp": "string",
        "telefono": {
          "tipo": "no_definido",
          "codigo_pais": "string",
          "codigo_area": "string",
          "prefijo": "string",
          "numero": "5566778899",
          "extension": 0
        },
        "municipio": "string",
        "ciudad": "string",
        "estado": "str",
        "pais": "str",
        "referencia_1": "string",
        "referencia_2": "string",
        "longitud": -90,
        "latitud": -90,
        "nombre": "string",
        "apellido_paterno": "string",
        "apellido_materno": "string"
      },
      "peso": 0,
      "articulos": [
        {
          "id_pedido": "string",
          "nombre_producto": "string",
          "descripcion_producto": "string",
          "sku": "string",
          "ean_upc": "string",
          "tipo_producto": "digital",
          "cantidad": 0,
          "precio_unitario": 0,
          "precio_total": 0,
          "otros": "string",
          "es_digital": true
        }
      ],
      "total_articulos": 0,
      "fecha_creacion": "2019-08-24T14:15:22Z",
      "fecha_entrega": "2019-08-24T14:15:22Z",
      "empresa_envio": "noventamin",
      "numero_guia": "string",
      "es_regalo": true,
      "monto_articulos": 0,
      "monto_envio": 0,
      "total_monto": 0,
      "device_fingerprint": "string",
      "ip_cliente": "192.168.0.1",
      "datos_comercio": {
        "1": "test string",
        "2": "another string"
      }
    },
    "cliente": {
      "id": "string",
      "id_externo": "string",
      "creacion_externa": "2019-08-24T14:15:22Z",
      "nombre": "string",
      "apellido_paterno": "string",
      "apellido_materno": "string",
      "email": "usuario@t1pagos.com",
      "telefono": {
        "tipo": "no_definido",
        "codigo_pais": "string",
        "codigo_area": "string",
        "prefijo": "string",
        "numero": "5566778899",
        "extension": 0
      },
      "direccion": {
        "linea1": "string",
        "linea2": "string",
        "linea3": "string",
        "cp": "string",
        "telefono": {
          "tipo": "no_definido",
          "codigo_pais": "string",
          "codigo_area": "string",
          "prefijo": "string",
          "numero": "5566778899",
          "extension": 0
        },
        "municipio": "string",
        "ciudad": "string",
        "estado": "str",
        "pais": "str",
        "referencia_1": "string",
        "referencia_2": "string",
        "longitud": -90,
        "latitud": -90
      }
    },   
  }