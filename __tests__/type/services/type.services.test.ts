import {expect, jest, test} from '@jest/globals';
import { TriangleDto } from '../../../type/dto/triangle.dto';
import typeService from '../../../type/services/type.service';

describe('Triangle Type Service', () => {
  
  test.each([
    [{sideA: 2, sideB: 2, sideC: 2}, 'EQUILATERAL'],
    [{sideA: 2, sideB: 3, sideC: 4}, 'SCALENE'],
    [{sideA: 2, sideB: 2, sideC: 3}, 'ISOSCELES'],
    [{sideA: 2, sideB: 3, sideC: 2}, 'ISOSCELES'],
    [{sideA: 3, sideB: 2, sideC: 2}, 'ISOSCELES'],
  ])('should return %s for triangle %o', async (triangle: TriangleDto, expectedType: string) => {
    const result = await typeService.getTriangleType(triangle);
    expect(result).toBe(expectedType);
  });
  
  test('test triangle service isosceles', () => {
    const triangleDto: TriangleDto = {
        sideA: 2, 
        sideB: 2,
        sideC: 1,
    };
    
    typeService.getTriangleType(triangleDto).then(triangleType => {
        expect(triangleType).toBe('ISOSCELES');
    });
  });
});
