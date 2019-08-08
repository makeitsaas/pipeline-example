import { Entity, Column, PrimaryColumn } from '@make-it-saas/pipeline';
import { InputEntity } from '@make-it-saas/pipeline/dist/decorators';

@InputEntity()
export class Comments {

    @PrimaryColumn()
    id: string;

    @Column()
    comment: string;

}
