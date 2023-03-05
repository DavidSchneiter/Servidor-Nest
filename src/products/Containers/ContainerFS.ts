import { Logger } from "@nestjs/common";
import * as fs from "fs";

import { CreateProductDto } from '../dto/product.dto';

let instacia = null;
export class ContainerDaoFile {

    private ready = false;
    static instancia;
    private contain: CreateProductDto[]
    private id:number
    private ruta: string
    private readonly logger: Logger = new Logger()
    constructor(ruta: string) {
        this.contain = [];
        this.id = 0;
        this.ruta = `./src/products/db/${ruta}.txt`;
    }
    static getInstancia = (ruta: string) => {
        if (!instacia) instacia = new ContainerDaoFile(ruta);
        return instacia;
    };

    async init() {
        try {
            await fs.promises.readFile(this.ruta, "utf-8");
            this.ready = true;
            this.logger.log("personas dao en archivo -> listo");
        } catch (error) {
            await fs.promises.writeFile(this.ruta, "[]");
            this.ready = true;
            this.logger.log("personas dao en archivo -> listo");
        }
    }

    disconnect() {
        this.logger.log("personas dao en archivo -> cerrado");
    }

    private checkReady() {
        if (!this.ready) throw new Error("INTERNAL_ERROR: dao no conectado!");
    }

    private async leerArchivo() {
        this.checkReady();
        const datos = await fs.promises.readFile(this.ruta, "utf-8");
        this.contain = JSON.parse(datos);
    }
    private async escribirArchivo() {
        this.checkReady();
        const datos = JSON.stringify(this.contain, null, 2);
        await fs.promises.writeFile(this.ruta, datos);
    }
    async save(obj:CreateProductDto) {
        await this.leerArchivo();
        if (!obj.id) {
            this.id++;
            obj.id = this.id;
        }
        this.contain.push(obj);
        this.contain.sort((a:CreateProductDto, b:CreateProductDto) => {
            return a.id - b.id;
        });
        try {
            await this.escribirArchivo();
            return obj;
            // return `Id asignado al producto ${obj.title}: ${obj.id}`;
        } catch (error) {
            throw new Error("Imposible guardar");
        }
    }
    async getById(id:number) {
        try {
            await this.leerArchivo();
            return this.contain.find((e:CreateProductDto) => {
                return e.id == id;
            });
        } catch (error) {
            throw new Error("Imposible leer archivo");
        }
    }
    async changeById(id:number, obj:CreateProductDto) {
        try {
            await this.leerArchivo();
            obj.id = id;
            this.contain.splice(this.contain.findIndex((e: CreateProductDto) => e.id == id), 1, obj);
            await this.escribirArchivo();
            return obj;
      } catch (error) {

      }
    }
    async getAll() {
        try {
            await this.leerArchivo();
            if (!this.contain) return "Archivo vacio";
            return this.contain;
        } catch (error) {
            throw new Error("Imposible leer archivo");
        }
    }
    async deleteById(id:number) {
        try {
            await this.leerArchivo();
            const newData = this.contain.filter((e:CreateProductDto) => {
                return e.id !== id;
            });
            this.contain = newData;
            this.escribirArchivo();
            return newData;
        } catch (error) {
            throw new Error("Imposible leer archivo");
        }
    }

    async deleteAll() {
        try {
            await this.leerArchivo();
            this.contain = [];
            this.escribirArchivo();
            return this.contain;
        } catch (error) {
            throw new Error("Imposible leer archivo");
        }
    }
}