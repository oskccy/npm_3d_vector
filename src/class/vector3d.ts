export class Vector3D {
    constructor(public x: number, public y: number, public z: number) {}

    // Addition of two vectors
    add(v: Vector3D): Vector3D {
        return new Vector3D(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    // Subtraction of two vectors
    subtract(v: Vector3D): Vector3D {
        return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    // Scalar multiplication
    multiply(scalar: number): Vector3D {
        return new Vector3D(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    // Scalar division
    divide(scalar: number): Vector3D {
        if (scalar === 0) throw new Error('Cannot divide by zero.');

        return new Vector3D(this.x / scalar, this.y / scalar, this.z / scalar);
    }

    // Dot product of two vectors
    dot(v: Vector3D): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    // Cross product of two vectors
    cross(v: Vector3D): Vector3D {
        return new Vector3D(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        );
    }

    // Utility method for displaying the vector as a string
    toString(): string {
        return `Vector3D(${this.x}, ${this.y}, ${this.z})`;
    }
}
