import {test} from "@playwright/test";

test.describe("Test Group @group1", async()=>{
    test.beforeAll(async()=>{
        console.log("Before All");
    })
    test.afterAll(async()=>{
        console.log("After All");
    })
    test.beforeEach(async()=>{
        console.log("Before Each");
    })
    test.afterEach(async()=>{
        console.log("After Each");
    })
test("Test1", async({page})=>{
    console.log("Test1");
});
test("Test2", async({page})=>{
    console.log("Test2");
});
test("Test3", async({page})=>{
    console.log("Test3");
});
})





