import DragonService from '../../services/dragon';

describe('Dragon Service', () => {
  it('should create a new dragon', async () => {
    const mockDragon = {
      name: 'Fafnir',
      type: 'Fire',
      histories: '',
    };

    const response = await DragonService.createDragon(mockDragon);
    expect(response.name).toBe(mockDragon.name);
  });

  it('should return all dragons', async () => {
    const response = await DragonService.getAllDragons();

    expect(response.length).toBeGreaterThan(0);
  });

  it('should delete a dragon', async () => {
    const allDragons = await DragonService.getAllDragons();
    const response = await DragonService.deleteDragonById(allDragons[0].id);

    expect(response).toBeDefined();
  });

  it('should edit a dragon', async () => {
    const mockDragon = {
      name: 'Toothless',
      type: 'Fire',
      histories: '',
    };

    const allDragons = await DragonService.getAllDragons();
    const response = await DragonService.editDragon(mockDragon, allDragons[0].id);

    expect(response.name).toBe(mockDragon.name);
  });
});
