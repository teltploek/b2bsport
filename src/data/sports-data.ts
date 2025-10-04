export interface Sport {
  id: string
  icon: string
  name: {
    da: string
    en: string
    de: string
  }
  featured?: boolean
}

export const sportsCategories: Sport[] = [
  {
    id: 'football',
    icon: 'IconBallFootball',
    name: {
      da: 'Fodbold',
      en: 'Football',
      de: 'Fußball'
    }
  },
  {
    id: 'handball',
    icon: 'IconHandStop',
    name: {
      da: 'Håndbold',
      en: 'Handball',
      de: 'Handball'
    }
  },
  {
    id: 'basketball',
    icon: 'IconBallBasketball',
    name: {
      da: 'Basketball',
      en: 'Basketball',
      de: 'Basketball'
    }
  },
  {
    id: 'volleyball',
    icon: 'IconBallVolleyball',
    name: {
      da: 'Volleyball',
      en: 'Volleyball',
      de: 'Volleyball'
    }
  },
  {
    id: 'golf',
    icon: 'IconGolf',
    name: {
      da: 'Golf',
      en: 'Golf',
      de: 'Golf'
    }
  },
  {
    id: 'tennis',
    icon: 'IconBallTennis',
    name: {
      da: 'Tennis',
      en: 'Tennis',
      de: 'Tennis'
    }
  },
  {
    id: 'table-tennis',
    icon: 'IconPingPong',
    name: {
      da: 'Bordtennis',
      en: 'Table Tennis',
      de: 'Tischtennis'
    }
  },
  {
    id: 'darts',
    icon: 'IconTarget',
    name: {
      da: 'Dart',
      en: 'Darts',
      de: 'Darts'
    }
  },
  {
    id: 'swimming',
    icon: 'IconSwimming',
    name: {
      da: 'Svømning',
      en: 'Swimming',
      de: 'Schwimmen'
    }
  },
  {
    id: 'cycling',
    icon: 'IconBike',
    name: {
      da: 'Cykling',
      en: 'Cycling',
      de: 'Radfahren'
    }
  },
  {
    id: 'running',
    icon: 'IconRun',
    name: {
      da: 'Løb',
      en: 'Running',
      de: 'Laufen'
    }
  },
  {
    id: 'fitness',
    icon: 'IconBarbell',
    name: {
      da: 'Fitness',
      en: 'Fitness',
      de: 'Fitness'
    }
  }
]