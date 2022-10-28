class ValidationService{
    // validateCreate(obj, db){
    //     if(obj.name == null || obj.name == "")
    //         return false;  
    //     if(db.find(x => x.name == obj.name))
    //         return false;
        
    //     return true;
    // }

    validateEmployee(obj){
        if(!obj.name || !obj.cpf || !obj.rg || !obj.genre||!obj.birthday||!obj.admission)
            return false;        
        return true;
    }

    validateFeedback(obj){
        if(!obj.feedbackId || !obj.cpf || !obj.feedback )
            return false;     
        return true;
    }

    validatePosition(obj){
        if(!obj.cpf || !obj.positionName || !obj.startDate||!obj.endDate||!obj.description)
            return false;        
        return true;
    }

    validateUpdate(code,obj,db){
        if(db.find(x => x.id == obj.id)){
            if(code != obj.id)
                return false;
        }
        return true;
    }
}

module.exports = new ValidationService();
