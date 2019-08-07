import { Entity, Column, PrimaryColumn } from '@make-it-saas/pipeline';

@Entity()
export class Comments {

    @PrimaryColumn()
    id: string;

    @Column()
    comment_text: string;

    @Column()
    identity_hate: number;
}
