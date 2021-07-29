
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('repos', t => {
        t.increments('id')
        t.string('project_owner')
        t.string('project_name')
        t.string('project_url')
        t.integer('stars')
        t.integer('forks')
        t.integer('issues')
        t.bigInteger('created_at').unsigned()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('repos')
};
