module.exports = {
    age: function(timestamp){
        const today = new Date();
        const birthDate = new Date(timestamp);
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();



        if(month <= 0 && today.getDate() <= birthDate.getDate() ){
            age = age - 1;
        }
        return age;
    },
    date: function(timestamp){
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    blood: function(blood){
        let bloodType = "";
        switch(blood){
            case "A1":
                bloodType = "A+";
            break;
            case "A0":
                bloodType = "A-";
            break;
            case "B1":
                bloodType = "B+";
            break;
            case "B0":
                bloodType = "B-";
            break;
            case "O1":
                bloodType = "O+";
            break;
            case "O0":
                bloodType = "O-";
            break;
            case "AB1":
                bloodType = "AB+";
            break;
            case "AB0":
                bloodType = "AB-";
            break;
            default:
                bloodType = "Not Found";
        }
        return bloodType;

    }
}