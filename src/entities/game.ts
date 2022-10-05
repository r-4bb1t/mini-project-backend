import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('game')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  title!: string;

  @OneToMany(() => Question, (question) => question.game)
  questions!: Question[];
}

@Entity('question')
export class Question {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column('text')
  content!: string;

  @Column('text')
  options!: string;

  @Column('int')
  count!: number;

  @ManyToOne(() => Game, (game) => game.questions)
  game: Game;
}
