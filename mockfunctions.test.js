// by mocking we can simulate its behavior and focus solely on testing functions

test("spying on a method of an object", () => {
    const video = {
        play() {
            return true;
        },
    };

    const spy = jest.spyOn(video, "play"); //allows to observe functions real behavior
    video.play();

    expect(spy).toHaveBeenCalled(); //play was called, validates the functionality
    spy.mockRestore(); //restores the original implementation of that function
})