import { CoreContainer, Pipeline, Connection } from '@make-it-saas/pipeline';
import { Comments } from '../src/inputs/test/entities/comments';
import { Comments as Com2 } from '../src/inputs/test_2/entities/comments';
import { inputDatabase, outputDatabase } from '@make-it-saas/pipeline/dist/decorators';
import { DemoModel } from '@make-it-saas/pipeline/dist/datascience';

class FrameworkSpecificClass {
    @inputDatabase('test')
    testDb: Connection;

    @outputDatabase()
    outputDb: Connection;

    getData() {
        this.testDb.getRepository(Comments).find().then(results => console.log(results.slice(0, 1)));
    }

    async doML() {
        const model = new DemoModel(Com2);
        await model.train();
        console.log("predict", await model.predict());
    }
}

CoreContainer.onReady().then(() => {
    const pipe = new Pipeline();
    pipe.run();

    const testClass = new FrameworkSpecificClass();
    // testClass.getData();
    return testClass.doML();
}).then(() => {
    console.log('done');
});

