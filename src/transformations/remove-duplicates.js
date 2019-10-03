module.exports = (data,cb) => {
    try {
      const wines = Object.assign({}, data);
      wines.duplicateVerification = `${data.name}${data.year}${data.type}`;
      wines.quality = data.quality * 5 /100;
      cb(null, wines);
    } catch (e) {
      console.log('Transformation error:', e.message, e.stack);
      throw e;
    }
  }