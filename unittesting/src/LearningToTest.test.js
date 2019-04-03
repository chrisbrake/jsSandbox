import mockAxios from "axios";
import LearningToTest from "./LearningToTest";

it("calls axios and returns images", async () => {
    // setup
    mockAxios.get.mockImplementationOnce( 
        url => Promise.resolve(
            { 
                data: {
                    results: ['cute.jpg'] 
            }
    }) );

    // work
    const images = LearningToTest("kittens");

    // assertions / expects
    //expect(images).toEqual(['cute.jpg']);
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(
        "https://dog.ceo/api/breeds/image/random")
});


//import { add, total } from './App';

const add = jest.fn(() => 3);
const total = jest.fn(() => '$25');

// Unit test
// It only tests one thing
test('add', () => {
    expect(add(1, 2)).toBe(3);
    expect(add).toHaveBeenCalledTimes(1);
    expect(add).toHaveBeenCalledWith(1, 2);
    //expect(add(5, 2)).toBe(7);
});

// Integration tests 
// Tests things working together
test('total', () => {
    expect(total(5, 20)).toBe('$25');
});