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


test('test triangle service equlateral', () => {

    const triangleDto: TriangleDto = {
        sideA: 1,
        sideB: 1,
        sideC: 1,
    };
    typeService.getTriangleType(triangleDto).then(triangleType => {
        expect(triangleType).toBe('EQUILATERAL');
    })
    
});

test('test triangle service escaleno', () => {

    const triangleDto: TriangleDto = {
        sideA: 4,
        sideB: 2,
        sideC: 3,
    };
    typeService.getTriangleType(triangleDto).then(triangleType => {
        expect(triangleType).toBe('ESCALENO');
    })
    
});
