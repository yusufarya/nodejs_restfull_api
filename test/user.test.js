import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import { createTestUser, removeTestUser } from "./test_util.js";

describe('POST /api/users', function () {

    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
    });

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username : "test",
                password : "rahasia",
                name : "test Aryadilla"
            })
            
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test Aryadilla');
        expect(result.body.data.password).toBeUndefined();
        
    });
    
    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username : "",
                password : "",
                name : ""
            })
        
        logger.info(result.body);
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeUndefined();
        
    });

    it('should reject if username already registered', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username : "test",
                password : "rahasia",
                name : "test Aryadilla"
            })
        
        logger.info(result.body);
        
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test Aryadilla');
        expect(result.body.data.password).toBeUndefined();

        result = await supertest(web)
            .post('/api/users')
            .send({
                username : "test",
                password : "rahasia",
                name : "test Aryadilla"
            })
        
            logger.info(result.body);

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
        
    });

});

describe('POST /api/users/login', function() {
    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
    });

    it("should can login", async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username : "test",
                password : "rahasia"
            });

        logger.info(result.body);

        expect(result.status).toBe(200)
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe("test");
    });
    
    it("should reject login if request is invalid", async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username : "",
                password : ""
            });

        logger.info(result.body);

        expect(result.status).toBe(400)
        expect(result.body.errors).toBeDefined();
    });
   
    it("should reject login if password is wrong", async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username : "test",
                password : "123456"
            });

        logger.info(result.body);

        expect(result.status).toBe(401)
        expect(result.body.errors).toBeDefined();
    });
    
    it("should reject login if username is wrong", async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username : "username_salah",
                password : ""
            });

        logger.info(result.body);

        expect(result.status).toBe(401)
        expect(result.body.errors).toBeDefined();
    });

});

describe('GET /api/users/current', function() {
    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
    });

    it('Should can get current user', async () => {
        const result = await supertest(web)
            .get('api/user/current')
            .set('Authorization', 'test');
        
        expect(result.status).toBe(200)
        expect(result.body.data.username).toBe('test')
        expect(result.body.data.name).toBe('test')

    })
    
    it('Should reject if token is invalid', async () => {
        const result = await supertest(web)
            .get('api/user/current')
            .set('Authorization', 'salah');
        
        expect(result.status).toBe(401)
        expect(result.body.errors).toBeDefined()

    })
})