const CreateEvent = () => {
  return (
    <>
      <h1 className="font-normal text-2xl/[43.36px] text-white">CREATE EVENT</h1>
      <form action="">
        <div className="flex">
            <input type="file" title="image" className="w-[320px] h-[530px] bg-black" />
            <div>

                <div>
                <h1 className="font-normal text-2xl/[43.36px] text-white">ABOUT EVENT</h1>
                <input type="text" name="title" placeholder="ENTER TITLE" className="h-[40px] p-2 rounded-xl"/>
                <textarea placeholder="ENTER DESCRIPTION"/>
                </div>
                <div>
                <h1 className="font-normal text-2xl/[43.36px] text-white">DETAILS</h1>
                <input type="text" name="location" placeholder="ENTER LOCATION" className="h-[40px] p-2 rounded-xl"/>
                <input type="text" name="date" placeholder="ENTER DATE" className="h-[40px] p-2 rounded-xl"/>
                </div>
                <input type="submit" value="SUBMIT" className="h-[40px] p-2 rounded-xl" />
            </div>
        </div>
      </form>
    </>
  );
};

export default CreateEvent;