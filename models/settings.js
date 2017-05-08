module.exports = (sequelize, Datatypes) => {
  let Setting = sequelize.define('settings', {
    user_id: {
      type: Datatypes.INTEGER,
      allowNull: true
    },
    favorite_team: {
      type: Datatypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false
  })

  return Setting
}