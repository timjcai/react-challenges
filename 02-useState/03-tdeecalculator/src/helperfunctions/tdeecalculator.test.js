import { render, screen } from '@testing-library/react';
import { calculateTDEE, calculateBMRImperial, calculateBMRMetric } from './tdeecalculator';

// sex
// imperial or metric
// age
// weight
// height
// activity
// body fat

// TDEE Test - both metric and imperial
test('expect male, metric, 25y.o, 65kg, 180cm, light activity, 17% bodyfat to equal 2,276 calories', () => {
  expect(calculateTDEE('male', 'metric', 25, 180, 65, "light")).toBe(2276);
})

test('expect male, imperial, 25y.o, 203lbs, 68inches, light activity, 17% bodyfat to equal 2,276 calories', () => {
  expect(calculateTDEE('male', 'imperial', 25, 68, 203, "light")).toBe(2586);
})

// BMR METRIC TEST
test('expect male, 25y.o, 65kg, 180cm to equal 1655 calories for BMR', () => {
  expect(calculateBMRMetric('male', 65, 180, 25)).toBe(1655);
})

test('expect male, 23y.o, 91kg, 165m to equal calories 1831 for BMR', () => {
  expect(calculateBMRMetric('male', 91, 165, 23)).toBe(1831);
})

test('expect male, 42y.o, 84kg, 175cm to equal calories 1729 for BMR', () => {
  expect(calculateBMRMetric('male', 84, 175, 42)).toBe(1729);
})

test('expect female, 25y.o, 65kg, 180cm to equal 1489 calories for BMR', () => {
  expect(calculateBMRMetric('female', 65, 180, 25)).toBe(1489);
})

test('expect female, 23y.o, 91kg, 165m to equal calories for 1665 BMR', () => {
  expect(calculateBMRMetric('female', 91, 165, 23)).toBe(1665);
})

test('expect female, 42y.o, 84kg, 175cm to equal calories 1563 for BMR', () => {
  expect(calculateBMRMetric('female', 84, 175, 42)).toBe(1563);
})

// BMR Imperial Test
test('expect male, 42y.o, 116lbs, 67inches to equal 1385 calories for BMR', () => {
  expect(calculateBMRImperial('male', 116, 67, 42)).toBe(1385);
})

test('expect male, 23y.o, 181lbs, 82inches to equal calories 2013 for BMR', () => {
  expect(calculateBMRImperial('male', 181, 82, 23)).toBe(2013);
})

test('expect male, 18y.o, 290lbs, 74inches to equal calories 2406 for BMR', () => {
  expect(calculateBMRImperial('male', 290, 74, 18)).toBe(2406);
})

test('expect female, 42y.o, 116lbs, 67inches to equal 1219 calories for BMR', () => {
  expect(calculateBMRImperial('female', 116, 67, 42)).toBe(1219);
})

test('expect female, 23y.o, 181lbs, 82inches to equal calories 1847 for BMR', () => {
  expect(calculateBMRImperial('female', 181, 82, 23)).toBe(1847);
})

test('expect female, 18y.o, 290lbs, 74inches to equal calories 2240 for BMR', () => {
  expect(calculateBMRImperial('female', 290, 74, 18)).toBe(2240);
})
