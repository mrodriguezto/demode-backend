import { server } from "../index";

import chai from "chai";
import chaiHttp  from "chai-http";
chai.use(chaiHttp);

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTA2OGEzZTYxZjdhNjkxMzFhMWY4MyIsImVtYWlsIjoibWlndWVsQGdtYWlsLmNvbSIsImlhdCI6MTY1MDY4MDM5OH0.WPblrVQiHo-_dQvPZm5f71aVz6QxiZoLGGmUKpQUvzg";

import { expect } from 'chai';


describe("Demodé Backend Tests", () =>{
    describe("General Tests", () =>{

        it("404 Error", (done) =>{
            chai.request(server)
            .get("/rutaXdelaweb")
            .end((err,response) => {
                expect(response).to.have.status(404);
                done();
            });
        });

        it("Index test", (done) =>{
            chai.request(server)
            .get("/")
            .end((err,response) => {
                expect(response).to.have.property("text","No deberías estar aquí");
                done();
            });
        });

        it("Authentication failed", (done) =>{
            chai.request(server)
            .post("/events/new")
            .send({
                "title": "Taruka Fest",
                "description": "Taruka fest online en la Kto",
                "img": "fotito",
                "starts_at": "2021-11-20T17:00:00.000Z",
                "url": "urlxd"  
            })
            .end((err,response) => {
                expect(response).to.have.status(401);
                done();
            });
        });
    });


    
    describe(" Contact tests ", ()=>{

        it("Get-all contacts",(done)=>{
            chai.request(server)
            .get("/contact")
            .set('authorization',token)
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();

            })
        });

        it("New contact",(done)=>{
            chai.request(server)
            .post("/contact/new")
            .send({
                "name": "Miguel",
                "email": "miguel@gmail.com",
                "message": "AAAAAAAAAAAAAAAAAAA"
            })
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();
            })
        });

    });

    

    describe(" Events tests ", ()=>{

        it("Get-all events",(done)=>{
            chai.request(server)
            .get("/events")
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();

            })
        });

        var createdEventId:string = "";        

        it("Create event",(done)=>{
            chai.request(server)
            .post("/events/new")
            .set('authorization',token)
            .send({
                "title": "Taruka Fest a aaaa",
                "description": "Taruka fest online en la Kto",
                "place": "fotito",
                "starts_at": "2021-11-20T17:00:00.000Z",
                "url": "urlxd"
            })
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                createdEventId = response.body._id;
                done();
            })
        });

        it("Edit event",(done)=>{
            chai.request(server)
            .put("/events/"+createdEventId+"/edit")
            .set('authorization',token)
            .send({
                "title": "Taruka Fest",
                "description": "Taruka fest online en la Kto",
                "place": "fotito",
                "starts_at": "2021-11-20T17:00:00.000Z",
                "url": "urlxd"
            })
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();
            })
        });

        it("Delete event",(done)=>{
            chai.request(server)
            .delete("/events/"+createdEventId+"/delete")
            .set('authorization',token)
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();
            })
        });

    });


    describe(" Post(News) tests ", ()=>{

        it("Get-all posts",(done)=>{
            chai.request(server)
            .get("/posts")
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();

            })
        });

        var createdPostId:string = "";        

        it("Create post",(done)=>{
            chai.request(server)
            .post("/posts/new")
            .set('authorization',token)
            .send({
                "title": "HOLA",
                "content": "holi",
                "img": "gaaaaa"
            })
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                createdPostId = response.body._id;
                done();
            })
        });

        it("Edit post",(done)=>{
            chai.request(server)
            .put("/posts/"+createdPostId+"/edit")
            .set('authorization',token)
            .send({
                "title": "HOLA 2",
                "content": "holi 2"
            })
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();
            })
        });

        it("Delete post",(done)=>{
            chai.request(server)
            .delete("/posts/"+createdPostId+"/delete")
            .set('authorization',token)
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();
            })
        });

    });


    describe(" Product tests ", ()=>{

        it("Get-all products",(done)=>{
            chai.request(server)
            .get("/products")
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();

            })
        });

        var createdProductId:string = "";        

        it("Create post",(done)=>{
            chai.request(server)
            .post("/products/new")
            .set('authorization',token)
            .send({
                "title": "Brazalete para machos",
                "description": "ewe",
                "img": "https://m.media-amazon.com/images/I/51d84wgrrnL._AC_UY500_.jpg",
                "url": "mmm",
                "categories": "awa, ewe, iwi, owo, uwu"
            })
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                createdProductId = response.body._id;
                done();
            })
        });

        it("Edit product",(done)=>{
            chai.request(server)
            .put("/products/"+createdProductId+"/edit")
            .set('authorization',token)
            .send({
                "title": "awaaaaaaaaaaaaaaaaaaaa",
                "description": "ewe",
                "url": "mmm",
                "categories": "awa, ewe, iwi, owo, uwu"
            })
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();
            })
        });

        it("Delete product",(done)=>{
            chai.request(server)
            .delete("/products/"+createdProductId+"/delete")
            .set('authorization',token)
            .end((err,response) => {

                if(err){
                    console.log(err);
                    done();
                }

                expect(response).to.have.status(200);
                done();
            })
        });

    });

});

