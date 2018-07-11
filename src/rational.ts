let gcd = (x: number, y: number): number => {
    if (y == 0)
        return x;
    else
        return gcd(y, x % y);
}

let lcm = (x: number, y: number): number => {
    return (x * y) / gcd(x, y);
}

export class Rational {
    constructor(
        public numerator: number,
        public denominator: number
    ) {
        this.reduce();
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    reduce(): void {
        const g = gcd(this.numerator, this.denominator);

        this.numerator /= g;
        this.denominator /= g;

        if (this.numerator < 0 && this.denominator < 0) {
            Math.abs(this.numerator);
            Math.abs(this.denominator);
        }
    }

    reciprocal(): Rational {
        return new Rational(this.denominator, this.numerator);
    }

    add(other: Rational): Rational {
        const l = lcm(this.denominator, other.denominator)
        return new Rational(
            (this.numerator * l / this.denominator) +
            (other.numerator * l / other.denominator), l
        )
    }

    sub(other: Rational): Rational {
        const l = lcm(this.denominator, other.denominator)
        return new Rational(
            (this.numerator * l / this.denominator) -
            (other.numerator * l / other.denominator), l
        );
    }

    mul(other: Rational): Rational {
        return new Rational(this.numerator * other.numerator,
            this.denominator * this.denominator);
    }

    div(other: Rational): Rational {
        return this.mul(other.reciprocal());
    }
}


