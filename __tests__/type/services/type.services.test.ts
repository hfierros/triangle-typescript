import {expect, jest, test} from '@jest/globals';
import { TriangleDto } from '../../../type/dto/triangle.dto';
import typeService from '../../../type/services/type.service';

test('test triangle service isosceles', () => {

    const triangleDto: TriangleDto = {
        sideA: 2, 
        sideB: 2,
        sideC: 1,
    };
    
    typeService.getTriangleType(triangleDto).then(triangleType => {
        expect(triangleType).toBe('ISOSCELES');
    })
    
});

test('test triangle service scalene', () => {

    const triangleDto: TriangleDto = {
        sideA: 2, 
        sideB: 5,
        sideC: 1,
    };
    
    typeService.getTriangleType(triangleDto).then(triangleType => {
        expect(triangleType).toBe('SCALENE');
    })
    
});

test('test triangle service equilateral', () => {

    const triangleDto: TriangleDto = {
        sideA: 5, 
        sideB: 5,
        sideC: 5,
    };
    
    typeService.getTriangleType(triangleDto).then(triangleType => {
        expect(triangleType).toBe('EQUILATERAL');
    })
    
});