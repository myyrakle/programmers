function solution(skill, skill_trees) {
    skill = skill.split('');
    
    return skill_trees.filter(
        tree => {
            let i = -1;
            for (const e of tree) {
                if(skill.includes(e)){
                    const find = skill.indexOf(e);
                    if(i+1 != find){
                        return false;
                    }
                    i++;
                }
            }
            return true;
        }
    ).length;
}
