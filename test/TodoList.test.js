const TodoList = artifacts.require('./TodoList.sol');

contract('TodoList',(accounts) => {
    before(async() => {
        this.todolist = await TodoList.deployed();
    });

    it('deploys successfully', async () => {
        const address = await this.todolist.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
    })

    it('lists tasks', async () => {
        const count = await this.todoList.taskCount();
        const task = await this.todoList.tasks(count)

        // assert.equal(task.id.toNumber(), taskCount.toNumber())
        // assert.equal(task.content, 'Check out dappuniversity.com')
        // assert.equal(task.completed, false)
        // assert.equal(count.toNumber(), 1)
      })
});