const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/aircraft/";
const sequelize = require("../../src/db/models/index").sequelize;
const Aircraft = require("../../src/db/models").Aircraft;

describe("routes : aircraft", () => {
    beforeEach(done => {
        this.aircraft;
        sequelize.sync({ force: true }).then(res => {
            Aircraft.create({
                tailNumber: "N818WB",
                location: "KPHX",
                nextTrip: "KPHX-KBDN",
                lastTrip: "AMF111",
                notes: "all is well"
            })
                .then(aircraft => {
                    this.aircraft = aircraft;
                    done();
                })
                .catch(err => {
                    console.log(err);
                    done();
                });
        });
    });

    describe("GET /aircraft", () => {
        it("should return status code 200 and all aircraft", done => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                expect(err).toBeNull();
                expect(body).toContain("Aircraft");
                expect(body).toContain("N818WB");
                done();
            });
        });
    });
});
