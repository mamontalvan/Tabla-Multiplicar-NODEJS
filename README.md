# Pasos para ejecutar la aplicación (Steps for running project):

1. Reconstruir los paquetes:

    npm install


2. Ejecutamos la aplicación. 

    node app -b 6 -l -h 20

    Parámetros que se debe enviar por consola para ejecutar nuestra aplicación:

    ```
    Options:
          --help     Show help                                             [boolean]
          --version  Show version number                                   [boolean]
      -b, --base     Es la base de la tabla de multiplicar       [number] [required]
      -l, --listar   Muestra la tabla en consola          [boolean] [default: false]
      -h, --hasta    Hasta dónde llega la tabla de multiplicar              [number]
    ```
    
3. Revisamos la tabla generada en el directorio "output":

    cd output/tabla-6.txt