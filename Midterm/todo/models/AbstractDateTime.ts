export default abstract class AbstractDateTime {
    public createdAt: Date;
  
    constructor() {
      this.createdAt = new Date();
    }
 }
