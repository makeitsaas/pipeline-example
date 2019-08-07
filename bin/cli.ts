import { Core, Pipeline, Databases, Connection } from '@make-it-saas/pipeline';
import { SomeArraySeed } from '@make-it-saas/pipeline/dist/seeds';
import { Comments } from '../src/inputs/test/entities/comments';

Core.onReady().then(() => {
    const pipe = new Pipeline();

    console.log('seed', SomeArraySeed);
    console.log('process.env.DB_TEST_HOSTNAME', process.env.DB_TEST_HOSTNAME);

    const connection: Connection = Databases['test'];
    console.log(Databases);

    connection.getRepository(Comments).find().then(results => console.log(results.slice(0, 10)));

    pipe.run();
    console.log('done');
});

