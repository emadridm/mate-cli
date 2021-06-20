import { expect, test } from '@oclif/test'

describe('account', () => {

  describe('with --create flag and name argument', () => {

    test
      .stdout()
      .command(['account', '--create', '"Registro Personal"'])
      .it('should create a Mate account with "Registro Personal" as name', (ctx) => {
        expect(ctx.stdout).to.contain('"Registro Personal"@Mate');
      })
  })

  describe('with --create flag and name argument', () => {

    test
      .stdout()
      .command(['account', '--create', '"Registro Personal"'])
      .it('should create a Mate account with "Registro Personal" as name', (ctx) => {
        expect(ctx.stdout).to.contain('"Registro Personal"@Mate');
      })
  })

  describe('with name argument equal to "correo"', () => {

    test
      .stdout()
      .command(['account', 'correo'])
      .it('should list all accounts that match correo', ctx => {
        expect(ctx.stdout).to.contain('"Correo Personal"@Google');
        expect(ctx.stdout).to.contain('"Correo Italtel"@Exchange');
      })

    test
      .stdout()
      .command(['account', '@mate'])
      .it('should list all accounts that match @Mate', ctx => {
        expect(ctx.stdout).to.contain('"Registro Personal"@Mate');
        expect(ctx.stdout).to.contain('"Registro Oficina"@Mate');
      })

  })

  describe('without both flags and name argument', () => {

    test
      .stdout()
      .command(['account'])
      .it('should list all accounts', ctx => {
        expect(ctx.stdout).to.contain('"Registro Personal"@Mate');
        expect(ctx.stdout).to.contain('"Registro Oficina"@Mate');
        expect(ctx.stdout).to.contain('"Correo Personal"@Google');
        expect(ctx.stdout).to.contain('"Correo Italtel"@Exchange');
        expect(ctx.stdout).to.contain('"Whatsapp Personal"@Whatsapp');
        expect(ctx.stdout).to.contain('"Dropbox Personal"@Dropbox');
        expect(ctx.stdout).to.contain('"Onedrive Italtel"@Onedrive');
      })

  })

  // test
  //   .stdout()
  //   .command(['account', '--name', 'jeff'])
  //   .it('runs hello --name jeff', ctx => {
  //     expect(ctx.stdout).to.contain('hello jeff')
  //   })

  // test
  //   .stdout()
  //   .command(['account', 'acme'])
  //   .it('runs account acme', ctx => {
  //     expect(ctx.stdout).to.contain('account acme created');
  //   })

})
