export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'firebrick');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkblue');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly HTML = new Tag('HTML', 'yellow');
    static readonly CSS = new Tag('CSS', 'blue');
    static readonly ASPNET = new Tag('Asp.net', 'lightskyblue');
    static readonly CSHARP = new Tag('C#', 'brown');
    static readonly NODEJS = new Tag('Node.js', 'green');
    static readonly PYTHON = new Tag('Python', 'mediumturquoise');
    static readonly REACT = new Tag('React', 'blue');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly GOOGLE = new Tag('Google', 'royalblue');
    static readonly AWARD = new Tag('Award', 'gold');


    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}