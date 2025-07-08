import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-hero-page',
    standalone: true,
    imports: [
        UpperCasePipe
    ],
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent {

    nameSignal = signal('Ironman');
    ageSignal = signal(45);

    heroDescription = computed(() => {
        const description = `${this.nameSignal()} - ${this.ageSignal()}`;
        return description;
    });

    capitalizedName = computed(() => {
        const upperName = this.nameSignal().toUpperCase();
        return upperName;
    });

    getHeroDescription() {
        return `${this.nameSignal()} + ${this.ageSignal()}`;
    }

    changeHero() {
        this.nameSignal.set('Spiderman');
        this.ageSignal.set(22);
    }

    changeAge() {
        this.ageSignal.set(60);
    }

    resetForm() {
        this.nameSignal.set('Ironman');
        this.ageSignal.set(45);
    }
}
