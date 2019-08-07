# Pipeline Example

WIP

## Getting started

* `.env` :
```
DB_<DATABASE-NAME-UPPERCASE>_HOSTNAME=localhost
DB_<DATABASE-NAME-UPPERCASE>_DATABASE=pipeline_test_1
DB_<DATABASE-NAME-UPPERCASE>_USERNAME=root
DB_<DATABASE-NAME-UPPERCASE>_PASSWORD=password
```


## Project tree
```
|-- config/
  |
  |-- config.json
   
|-- src/
  |
  |-- inputs/
      |
      |-- <database-name>/
        |
        |-- loader.ts
        |
        |-- entities/
          |
          |-- <entity-name>.ts
  |
  |-- overrides/
      |
      |-- ...
  |
  |-- pipelines/
      |
      |-- <pipeline-name>/
        |
        |-- entities/
           |
           |-- <entity-name>.ts
        |
        |-- <pipeline-name>.pipeline.ts
```


### Notes
- trigger pipelines steps on multiple data events (create, update, delete, batch, ...) => possible to rerun all from beginning
