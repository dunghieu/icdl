import { IsNotEmpty } from 'class-validator';

export class CreateStudentCourseMappingDto {
    @IsNotEmpty()
    studentId: number;

    @IsNotEmpty()
    courseId: number;
}
