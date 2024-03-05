class User {
    skills: string{};

    addSkill(skill: string): void;
    addSkill(skill: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if(typeof skillOrSkills === 'string') {
            this.skill.push(skillOrSkills)
        } else {
            this.skills.push(...skillOrSkills);
        }
    }

}