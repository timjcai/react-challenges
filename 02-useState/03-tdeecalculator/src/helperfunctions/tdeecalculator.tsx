import { SexType, MeasurementType, ActivityType } from "../types";

const activityTypeMapping: { [key in ActivityType]: number } = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  heavy: 1.725,
  athlete: 1.9
}

export function calculateTDEE(sex: SexType, measurement:MeasurementType, age:number, height:number, weight:number, activity:ActivityType) {
  if (measurement === 'imperial') {
    return calculateBMRImperial(sex, weight, height, age) * activityTypeMapping[activity]
  } else {
    return Math.round(calculateBMRMetric(sex, weight, height, age) * activityTypeMapping[activity])
  }
}

export function calculateBMRMetric(sex: SexType, weight: number, height: number, age: number): number {
  if (sex === 'male') {
    return Math.round((10 * weight) + (6.25 * height) - (5 * age) + 5);
  } else {
    return Math.round((10 * weight) + (6.25 * height) - (5 * age) - 161);
  }
}

export function calculateBMRImperial(sex: SexType, weight: number, height: number, age: number): number {
  if (sex === 'male') {

  } else {

  }
}
